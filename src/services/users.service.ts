import UserModel from '../database/models/user.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { UserAndProducts } from '../types/User';

async function listAllUsersAndProducts(): Promise<ServiceResponse<UserAndProducts[]>> {
  const usersWithProducts = await UserModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    }],
    attributes: { include: ['username'] },
  });
  const usersAndProductsFormatted: UserAndProducts[] = usersWithProducts.map((user) => ({
    username: user.dataValues.username,
    productIds: user.dataValues.productIds ? user.dataValues.productIds
      .map((product: any) => product.id) : [],
  }));

  return { status: 'SUCCESSFUL',
    data: usersAndProductsFormatted, 
  };
}

export default {
  listAllUsersAndProducts,
};