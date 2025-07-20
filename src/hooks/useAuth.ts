import { useState, useEffect } from 'react';

interface AuthState {
    isAuthenticated: boolean;
    user: null | { id: string; name: string; email: string };
    loading: boolean;
}

export function useAuth() {
    const [auth, setAuth] = useState<AuthState>({
        isAuthenticated: false,
        user: null,
        loading: true,
    });

    useEffect(() => {
        // Simulate fetching auth state from localStorage or API
        const token = localStorage.getItem('auth_token');
        if (token) {
            // Replace with real API call
            setAuth({
                isAuthenticated: true,
                user: { id: '1', name: 'John Doe', email: 'john@example.com' },
                loading: false,
            });
        } else {
            setAuth({
                isAuthenticated: false,
                user: null,
                loading: false,
            });
        }
    }, []);

    const login = (token: string, user: { id: string; name: string; email: string }) => {
        localStorage.setItem('auth_token', token);
        setAuth({
            isAuthenticated: true,
            user,
            loading: false,
        });
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        setAuth({
            isAuthenticated: false,
            user: null,
            loading: false,
        });
    };

    return {
        ...auth,
        login,
        logout,
    };
}