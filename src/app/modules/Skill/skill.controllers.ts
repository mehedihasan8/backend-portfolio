import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { Request, Response } from 'express';
import skillServices from './skill.services';

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillServices.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill created successfully!',
    data: result,
  });
});
const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillServices.getAllSkill();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all skill successfully!',
    data: result,
  });
});
const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await skillServices.deleteSkill(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete skill successfully!',
    data: result,
  });
});

const skillControllers = {
  createSkill,
  getAllSkill,
  deleteSkill,
};

export default skillControllers;
