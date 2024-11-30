import type { SignInCredential, SignInResponse } from '@/@types/auth';
import endpointConfig from '@/configs/endpoint.config';
import ApiService from './ApiService';

export async function listClients(data: SignInCredential) {
    return ApiService.fetchDataWithAxios<SignInResponse>({
        url: endpointConfig.listClients,
        method: 'get',
        data,
    });
}
