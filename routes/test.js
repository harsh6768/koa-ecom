const Router=require('@koa/router');
const router=new Router();
const testController=require('../controller/test');

router.get('/test',testController.test)


module.exports=router;

