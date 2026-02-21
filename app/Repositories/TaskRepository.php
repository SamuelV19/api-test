<?php

namespace App\Repositories;

use App\Models\Task;

class TaskRepository implements TaskRepositoryInterface
{
    public function getAll()
    {
        return Task::all();
    }

    public function findById(int $id): ?Task
    {
        return Task::find($id);
    }

    public function create(array $data): Task
    {
        return Task::create($data);
    }

    public function update(int $id, array $data): ?Task
    {
        $task = $this->findById($id);

        if (!$task) {
            return null;
        }

        $task->update($data);
        return $task;
    }

    public function delete(int $id): bool
    {
        $task = $this->findById($id);

        if (!$task) {
            return false;
        }

        return $task->delete();
    }
}