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

<<<<<<< HEAD
    router.post('/api/login', customerController.handleLoginService);
    router.post('/api/register', customerController.handleRegisterService);

    router.post('/api/login-partner', partnerControllers.handleLoginPartnerService);
    router.post('/api/register-partner', partnerControllers.handleRegisterPartnerService);
=======
  router.post("/api/login", customerController.handleLogin);
  router.post("/api/register", customerController.handleRegister);

  router.post("/api/login-partner", partnerControllers.handleLoginPartner);
  router.post(
    "/api/register-partner",
    partnerControllers.handleRegisterPartner
  );
>>>>>>> 93db5d37d885be35dd5c528e10405ec510253af8

    router.get('/api/get-all-services', partnerControllers.getAllServices);

    return app.use('/', router);
};

export default initApiRoutes;
