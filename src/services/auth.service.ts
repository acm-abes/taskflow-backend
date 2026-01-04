class AuthService {
  async signIn(body: any) {}

  async signUp(body: any) {
    throw new Error("Method not implemented.");
  }

  async signOut(userId: string) {
    throw new Error("Method not implemented.");
  }

  async refreshToken(token: string) {
    throw new Error("Method not implemented.");
  }

  async getCurrentUser(userId: string) {
    throw new Error("Method not implemented.");
  }
}

export const authService = new AuthService();
