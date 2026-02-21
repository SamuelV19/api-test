<?php

namespace App\Repositories;

use App\Models\Task;

interface TaskRepositoryInterface
{
    public function getAll();
    public function findById(int $id): ?Task;
    public function create(array $data): Task;
    public function update(int $id, array $data): ?Task;
    public function delete(int $id): bool;
}