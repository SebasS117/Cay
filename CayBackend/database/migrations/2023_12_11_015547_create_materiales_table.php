<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materiales', function (Blueprint $table) {
            $table->increments('id')->unsigned(false);
            $table->string('nombre');
            $table->string('cantidad');
            $table->enum('deposito', ['ordinarios', 'metales', 'plasticos', 'papel', 'vidrio']);
            $table->enum('reutilizable', ['Si', 'No']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materiales');
    }
};
