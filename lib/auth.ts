"use client"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "user" | "admin"
  address?: string
  phone?: string
  notificationPreferences?: boolean
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

class AuthService {
  private static instance: AuthService
  private listeners: ((state: AuthState) => void)[] = []
  private state: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  constructor() {
    if (typeof window !== "undefined") {
      this.loadUserFromStorage()
    }
  }

  private loadUserFromStorage() {
    try {
      const userData = localStorage.getItem("auth_user")
      const token = localStorage.getItem("auth_token")

      if (userData && token) {
        const user = JSON.parse(userData)
        this.state = {
          user,
          isAuthenticated: true,
          isLoading: false,
        }
      } else {
        this.state.isLoading = false
      }
    } catch (error) {
      console.error("Error loading user from storage:", error)
      this.state.isLoading = false
    }
    this.notifyListeners()
  }

  private saveUserToStorage(user: User, token: string) {
    localStorage.setItem("auth_user", JSON.stringify(user))
    localStorage.setItem("auth_token", token)
  }

  private removeUserFromStorage() {
    localStorage.removeItem("auth_user")
    localStorage.removeItem("auth_token")
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.state))
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  getState(): AuthState {
    return this.state
  }

  async signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      // Mock authentication - in real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

      // Mock users database
      const mockUsers: Record<string, { password: string; user: User }> = {
        "admin@elisha.com": {
          password: "admin123",
          user: {
            id: "admin-1",
            email: "admin@elisha.com",
            firstName: "Admin",
            lastName: "User",
            role: "admin",
            address: "Lagos, Nigeria",
            phone: "+234 123 456 7890",
            notificationPreferences: true,
            createdAt: new Date().toISOString(),
          },
        },
        "user@elisha.com": {
          password: "user123",
          user: {
            id: "user-1",
            email: "user@elisha.com",
            firstName: "John",
            lastName: "Doe",
            role: "user",
            address: "Abuja, Nigeria",
            phone: "+234 987 654 3210",
            notificationPreferences: true,
            createdAt: new Date().toISOString(),
          },
        },
      }

      const userData = mockUsers[email]
      if (!userData || userData.password !== password) {
        return { success: false, error: "Invalid email or password" }
      }

      const mockToken = `mock_jwt_token_${Date.now()}`

      this.state = {
        user: userData.user,
        isAuthenticated: true,
        isLoading: false,
      }

      this.saveUserToStorage(userData.user, mockToken)
      this.notifyListeners()

      return { success: true }
    } catch (error) {
      return { success: false, error: "Authentication failed" }
    }
  }

  async signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<{ success: boolean; error?: string }> {
    try {
      // Mock registration - in real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        firstName,
        lastName,
        role: "user", // New users are always regular users
        address: "",
        phone: "",
        notificationPreferences: true,
        createdAt: new Date().toISOString(),
      }

      const mockToken = `mock_jwt_token_${Date.now()}`

      this.state = {
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
      }

      this.saveUserToStorage(newUser, mockToken)
      this.notifyListeners()

      return { success: true }
    } catch (error) {
      return { success: false, error: "Registration failed" }
    }
  }

  signOut() {
    this.state = {
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }
    this.removeUserFromStorage()
    this.notifyListeners()
  }

  async updateProfile(updates: Partial<User>): Promise<{ success: boolean; error?: string }> {
    try {
      if (!this.state.user) {
        return { success: false, error: "No user logged in" }
      }

      const updatedUser = { ...this.state.user, ...updates }
      const token = localStorage.getItem("auth_token")

      if (token) {
        this.state = {
          ...this.state,
          user: updatedUser,
        }

        this.saveUserToStorage(updatedUser, token)
        this.notifyListeners()
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: "Failed to update profile" }
    }
  }
}

export const authService = AuthService.getInstance()
