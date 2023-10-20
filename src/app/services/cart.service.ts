import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7091/api/cart';

  private isLoggedIn = false;
  constructor(private http: HttpClient) { 
  }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addToCart(props: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, props);
  }

  removeFromCart(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove/${id}`);
  }

  increaseCartQuantity(id: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/increase-quantity/${id}`, {});
  }

  decreaseCartQuantity(id: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/decrease-quantity/${id}`, {});
  }

  private checkLoginStatus(): boolean 
  {
    const token = localStorage.getItem('token');

    if (token) {
      // You should validate the token here (e.g., check its expiration)
      // If the token is valid, return true; otherwise, return false
      const isTokenValid = this.validateToken(token); // Implement this function
      return isTokenValid;
    }

    return false;
  }

  // Example token validation logic
private validateToken(token: string): boolean {
  try {
    // Decode the JWT token using your preferred library (e.g., jwt-decode, jsonwebtoken, etc.)
    const decodedToken = this.decodeJwtToken(token);

    // Check the expiration date (exp) in the decoded token
    if (decodedToken.exp) {
      // Get the current timestamp in seconds
      const currentTimestamp = Math.floor(Date.now() / 1000);

      // Compare the expiration timestamp with the current timestamp
      if (currentTimestamp >= decodedToken.exp) {
        // Token is expired
        return false;
      }
    }

    // Additional checks can be added based on your specific token structure and requirements

    return true; // Token is valid
  } catch (error) {
    // Handle any errors that occur during token validation
    return false; // Token is invalid
  }
}

// Example token decoding using jwt-decode (replace with your library of choice)
private decodeJwtToken(token: string): any {
  try {
    // Decode the JWT token using the jwt-decode library (or another library of your choice)
    const decodedToken = jwt_decode(token); // Assuming you use jwt-decode

    // Return the decoded token
    return decodedToken;
  } catch (error) {
    // Handle any errors that occur during token decoding
    return {}; // Return an empty object for an invalid token
  }
}




isUserLoggedIn(): boolean {

  this.isLoggedIn = this.checkLoginStatus();
  return this.isLoggedIn;
}



}
