import { Router } from "express";
import pharmacyController from "../controllers/pharmacy.controller";

const pharmacyRouter = Router();

pharmacyRouter.get("/:id", (req, res) => {
  /* #swagger.tags = ['Pharmacy']
        #swagger.path = '/pharmacy/{id}'
        #swagger.description = 'Endpoint para listar uma farmácia.'
        #swagger.parameters['id'] = { description: 'Pharmacy
        identification.', required: true }
        #swagger.responses[200] = {
            description: 'Farmácia listada com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Erro ao listar farmácia.'
        }
        #swagger.responses[500] = {
            description: 'Erro no servidor.'
        }
    */
   pharmacyController.geybyid(req, res);
});

pharmacyRouter.get("/", (req, res) => {
  /* #swagger.tags = ['Pharmacy']
        #swagger.path = '/pharmacy/'
        #swagger.description = 'Endpoint para listar todas as farmácias.'
        #swagger.responses[200] = {
            description: 'Farmácias listadas com sucesso.'
        }
        #swagger.responses[404] = {
            description: 'Erro ao listar farmácias.'
        }
        #swagger.responses[500] = {
            description: 'Erro no servidor.'
        }
    */
  pharmacyController.listall(req, res);
});

pharmacyRouter.post("/create", (req, res) => {
  /* #swagger.tags = ['Pharmacy']
        #swagger.path = '/pharmacy/create'
        #swagger.description = 'Endpoint para criar uma farmácia.'
        #swagger.parameters['Pharmacy'] = {
            in: 'body',
            description: 'Pharmacy information.',
            required: true,
            schema: {
                $name: "Pharmacy Name",
                $address: "Pharmacy Address",
                $email: "Pharmacy Email",
            },
        }
        #swagger.responses[201] = {
            description: 'Farmácia criada com sucesso.'
        }
        #swagger.responses[400] = {
            description: 'Campos obrigatórios não preenchidos.'
        }
        #swagger.responses[404] = {
            description: 'Erro ao criar farmácia.'
        }
        #swagger.responses[409] = {
            description: 'Farmácia já existe.'
        }
        #swagger.responses[500] = {
            description: 'Erro no servidor.'
        }
    */
  pharmacyController.create(req, res);
});

export default pharmacyRouter;
