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
        Schema::create('customer_addresses', function (Blueprint $table) {
            $table->id();

            $table->foreignId('customer_id')->references('id')->on('customers');
            $table->string('type'); //shipping address or billing address
            $table->string('address1');
            $table->string('address2');
            $table->string('city');
            $table->string('state')->nullable();
            $table->string('zipCode');
            $table->string('countryCode');
            $table->foreignId('country_code')->references('code')->on('countries');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_addresses');
    }
};
