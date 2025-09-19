import { type NextRequest, NextResponse } from "next/server"

// Mock database for now - replace with actual MongoDB connection
const orders: any[] = []

// Mock auth function for development
function getAuth(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "")

    if (!token) {
      // Fallback for development
      return { userId: "dev-user-1", role: "user" }
    }

    // In production, verify JWT token
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    // return { userId: decoded.userId, role: decoded.role }

    // Mock verification for development
    return { userId: "dev-user-1", role: "user" }
  } catch {
    // Fallback for development
    return { userId: "dev-user-1", role: "user" }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, role } = getAuth(request)

    const formData = await request.formData()
    const weight = formData.get("weight") as string
    const itemType = formData.get("itemType") as string
    const pickupLocation = formData.get("pickupLocation") as string
    const image = formData.get("image") as File | null

    // Validate required fields
    if (!weight || !itemType || !pickupLocation) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Calculate price
    const weightNum = Number.parseFloat(weight)
    const pricePerKg = itemType === "food" ? 10 : 15
    const price = weightNum * pricePerKg

    // Handle image upload (mock for now)
    let imageUrl = null
    if (image) {
      // In production, upload to Cloudinary
      imageUrl = `/placeholder.svg?height=200&width=200&text=Package+Image`
    }

    // Create order
    const order = {
      id: `ORD-${Date.now()}`,
      weight: weightNum,
      itemType,
      pickupLocation,
      price,
      status: "pending",
      imageUrl,
      userId: userId || "anonymous",
      createdAt: new Date().toISOString(),
      trackingHistory: [
        {
          status: "pending",
          timestamp: new Date().toISOString(),
          description: "Order created and awaiting pickup",
        },
      ],
    }

    orders.push(order)

    // Mock email notification
    console.log(`Email sent to user for order ${order.id}`)

    return NextResponse.json({
      success: true,
      order,
    })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId, role } = getAuth(request)
    const { searchParams } = new URL(request.url)
    const isAdmin = searchParams.get("admin") === "true" || role === "admin"

    if (isAdmin) {
      // Return all orders for admin
      return NextResponse.json({
        success: true,
        orders: orders,
        stats: {
          total: orders.length,
          pending: orders.filter((o) => o.status === "pending").length,
          completed: orders.filter((o) => o.status === "delivered").length,
          revenue: orders.reduce((sum, o) => sum + o.price, 0),
        },
      })
    } else {
      // Return user-specific orders
      const userOrders = orders.filter((order) => order.userId === userId)
      return NextResponse.json({
        success: true,
        orders: userOrders,
        stats: {
          total: userOrders.length,
          pending: userOrders.filter((o) => o.status === "pending").length,
          completed: userOrders.filter((o) => o.status === "delivered").length,
          totalSpent: userOrders.reduce((sum, o) => sum + o.price, 0),
        },
      })
    }
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId, role } = getAuth(request)

    if (role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const { orderId, status, description } = await request.json()

    const orderIndex = orders.findIndex((order) => order.id === orderId)
    if (orderIndex === -1) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    // Update order status
    orders[orderIndex].status = status
    orders[orderIndex].trackingHistory.push({
      status,
      timestamp: new Date().toISOString(),
      description: description || `Order status updated to ${status}`,
    })

    return NextResponse.json({
      success: true,
      order: orders[orderIndex],
    })
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
