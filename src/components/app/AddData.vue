<template>
    <div class="addData container">
        <div class="row">
            <div class="col l4 s12 center-align">
                <div class="option">
                    <router-link :to="{name: 'bank'}" class="quiet">
                        <i class="material-icons big-icon">account_balance</i>
                        <p>Bancos</p>
                    </router-link>
                </div>
            </div>
            <div class="col l4 s12 center-align">
                <div class="option">
                    <i class="material-icons big-icon">account_box</i>
                    <p>Responsables</p>
                </div>
            </div>
            <div class="col l4 s12 center-align">
                <div class="option">
                    <i class="material-icons big-icon">business</i>
                    <p>Sucursales</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddData'
}
</script>

<style>
    .addData .big-icon {
        font-size: 5rem;
    }
    .addData .quiet:hover {
        color: #4db6ac;
        cursor: pointer;
    }
    .addData .quiet {
        color: black;
    }
</style>
