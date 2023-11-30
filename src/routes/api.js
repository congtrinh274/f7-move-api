import express from 'express';
import customerController from '../controller/customerController';
import partnerControllers from '../controller/partnerControllers';
import homeController from '../controller/homeController';
const router = express.Router();

const initApiRoutes = (app) => {
    // render login page
    router.get('/api/getAllBrandCar', homeController.getAllBrandCar); //done
    router.get('/api/getAllTypeCar', homeController.getAllTypeCar); //done
    router.get('/api/getAllColorCar', homeController.getAllColorCar); //done

    app.post('/sendHelp', homeController.sendHelp);

    router.post('/api/login', customerController.handleLoginService);
    router.post('/api/register', customerController.handleRegisterService);

    router.post('/api/login-partner', partnerControllers.handleLoginPartnerService);
    router.post('/api/register-partner', partnerControllers.handleRegisterPartnerService);

    router.get('/api/get-all-services', partnerControllers.getAllServices);

    return app.use('/', router);
};

export default initApiRoutes;
