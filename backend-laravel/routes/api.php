<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\ContactMessageController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API RESTful
Route::apiResource('projects', ProjectController::class);
Route::apiResource('services', ServiceController::class);
Route::apiResource('testimonials', TestimonialController::class);
Route::apiResource('contact-messages', ContactMessageController::class);