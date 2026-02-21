<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\TaskRepositoryInterface;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller
{
    protected TaskRepositoryInterface $taskRepository;

    public function __construct(TaskRepositoryInterface $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function index()
    {
        $tasks = $this->taskRepository->getAll();

        return response()->json($tasks, Response::HTTP_OK);
    }

    public function show(int $id)
    {
        $task = $this->taskRepository->findById($id);

        if (!$task) {
            return response()->json([
                'message' => 'Task not found'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json($task, Response::HTTP_OK);
    }

    public function store(StoreTaskRequest $request)
    {
        $task = $this->taskRepository->create($request->validated());

        return response()->json($task, Response::HTTP_CREATED);
    }

    public function update(UpdateTaskRequest $request, int $id)
    {
        $task = $this->taskRepository->update($id, $request->validated());

        if (!$task) {
            return response()->json([
                'message' => 'Task not found'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json($task, Response::HTTP_OK);
    }

    public function destroy(int $id)
    {
        $deleted = $this->taskRepository->delete($id);

        if (!$deleted) {
            return response()->json([
                'message' => 'Task not found'
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}