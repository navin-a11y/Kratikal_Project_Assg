const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');
const serviceModel = require('./../model/serviceModel');
const app = require('../app');

exports.createServer = catchAsync(async(req, res) => {
    const {url, status, priority} = req.body;

    let response;
    const service = new serviceModel({url:url, status: status, priority: priority});

    response = await service.save();

    res.status(200).json({
        status: 'success',
        result: response.length,
        data: response
    });
});


exports.listOnlineServer = catchAsync(async(req,res, next) => {

    const stLower = 200;
    const stUpper = 299;
    let response;

    response = await serviceModel.find({status: {$lte:stUpper, $gte: stLower}}).sort({priority: 1});

    res.setTimeout(5000, function(){
        return next(new appError("Time Out!!", 500));
    });

    if(!response.length) {
        return next(new appError("Sorry, there is no single server online. Please try after some time!!"));
    }

    res.status(200).json({
        status: 'success',
        result: response.length,
        data: response
    });

});


