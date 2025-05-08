<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mercearia extends Model
{
    protected $fillable = [
        'nome',
        'tipo',
        'unidade',
        'quantidade',
        'descricao',
    ];

    public function getImagemAttribute($value)
    {
        return asset('storage/' . $value);
    }

    public function setImagemAttribute($value)
    {
        $this->attributes['imagem'] = $value->store('imagens', 'public');
    }
}
