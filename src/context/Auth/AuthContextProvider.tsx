

import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { client } from '../../service/api';
import { ForbiddenException, InternalServerErrorException, NotFoundException, UnauthorizedException } from '../../service/api_exception';
import { FormLoginType } from '../../components/Auth/LoginForm';
import { Response, UserResponse } from '../../service/response';
import axios from 'axios';
import { handleErrorResponse } from '../../service/error_handler';
type AuthContextProviderProps = {
    children: React.ReactNode
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [auth, setAuth] = useState({
        access: "",
        refresh: "",
        session_id: ""
    })

    const [currentUser, setCurrentUser] = useState({} as UserType)
    const [loading, setLoading] = useState(true)
    const logout = async () => {
        await SecureStore.deleteItemAsync('session_id')
        await SecureStore.deleteItemAsync('access')
        await SecureStore.deleteItemAsync('refresh')
        setAuth({
            access: "",
            refresh: "",
            session_id: ""
        })

    }

    const getUserprofile = async () => {
        try {
            const response = await client.get('/users/me');
            const payload = response.data as UserResponse;
            if (payload.message == "Success") {
                setCurrentUser(
                    payload.data
                )
            }

        } catch (error: any) {
            // const errorMessage = handleErrorResponse(error);
            // console.error('API Error:', errorMessage);
            // throw new Error(errorMessage);
            throw error
        }
    }
    const login = async (form: FormLoginType, type: 'email' | 'phone') => {


        try {
            let payload = {
                email: form.email,
                countryCode: form.code,
                phone: form.telephone,
                password: form.password,
            } as {
                email?: string;
                password: string;
                countryCode?: string;
                phone?: string;
            }
            if (type == 'email') {
                delete payload.phone
                delete payload.countryCode
            }
            else {
                delete payload.email

            }


            const response = await client.post('/auth/login', payload);
            const data = response.data as Response;
            if (data.message == "Success") {
                await SecureStore.setItemAsync('session_id', data.data.sessionId);
                await SecureStore.setItemAsync('access', data.data.access_token);
                await SecureStore.setItemAsync('refresh', data.data.refreshToken);
                const access = await SecureStore.getItemAsync('access') ?? null
                client.defaults.headers.common['Authorization'] = `Bearer ${access}`

            }

            //set login token here
        } catch (error: any) {
            handleErrorResponse(error);
        }

    }

    const checkToken = async () => {

        const session_id = await SecureStore.getItemAsync('session_id') ?? null;
        const access = await SecureStore.getItemAsync('access') ?? null

        if (session_id) {
            setAuth(pre => ({ ...pre, session_id: session_id!, access: access! }))
            client.defaults.headers.common['Authorization'] = `Bearer ${access}`

        }
        setLoading(false)



    }

    useEffect(() => {
        checkToken();
    }, [])


    return <AuthContext.Provider value={{
        accessToken: auth.access,
        refreshToken: auth.refresh,
        session_id: auth.session_id,
        logout,
        login,
        getUserprofile,
        currentUser,
        loading

    }}>
        {children}
    </AuthContext.Provider>
}