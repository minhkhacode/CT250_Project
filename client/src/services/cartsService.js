import instance from '@/customizes/axios';

const removeCartService = (id) => {
    return instance.delete(`/api/cart/delete/id=${id}`);
};

export { removeCartService };
