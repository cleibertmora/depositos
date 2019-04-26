<template>
    <div class="addData container">
        <div class="row">
            <div class="col l4 s12 center-align">
                <div class="option">
                    <i class="material-icons big-icon">account_balance</i>
                    <p>Agregar Banco</p>
                </div>
            </div>
            <div class="col l4 s12 center-align">
                <div class="option">
                    <i class="material-icons big-icon">account_box</i>
                    <p>Agregar Responsable</p>
                </div>
            </div>
            <div class="col l4 s12 center-align">
                <div class="option">
                    <i class="material-icons big-icon">business</i>
                    <p>Agregar Sucursal</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .addData .big-icon {
        font-size: 5rem;
    }
    .addData .option:hover {
        color: #4db6ac;
        cursor: pointer;
    }
</style>
