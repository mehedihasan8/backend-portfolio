import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { Request, Response } from 'express';
import experienceServices from './experience.serveice';

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceServices.createExperience(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created successfully!',
    data: result,
  });
});
const getAllExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceServices.getAllExperience();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all experience successfully!',
    data: result,
  });
});
const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await experienceServices.deleteExperience(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete experience successfully!',
    data: result,
  });
});

const experienceControllers = {
  createExperience,
  getAllExperience,
  deleteExperience,
};

export default experienceControllers;
