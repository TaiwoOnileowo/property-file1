import { CheckoutFormData } from '@/components/advertise/CheckoutFlow';
import axios from 'axios';

export const postAdsFn = async (data: CheckoutFormData) => {
    return await axios.post('/api/ads', data);
}