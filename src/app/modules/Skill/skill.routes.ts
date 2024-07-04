import express from 'express';
import AuthGuard from '../../middlewares/AuthGuard';
import skillControllers from './skill.controllers';

const router = express.Router();

router.post('/', AuthGuard(), skillControllers.createSkill);
router.get('/', skillControllers.getAllSkill);
router.get('/dashboard', skillControllers.getAllSkillDashboard);
router.get('/:id');

router.delete('/:id', AuthGuard(), skillControllers.deleteSkill);

const skillsRoutes = router;

export default skillsRoutes;
