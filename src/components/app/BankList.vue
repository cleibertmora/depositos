<template>
    <div class="banklist">
        <div class="row right-align">
            <a class="waves-effect waves-light btn-large"><router-link :to="{name: 'addBank'}" class="white-text"><i class="material-icons right">account_balance</i>Nuevo Banco</router-link></a>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-content">
                    Hello World!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BankList'
}
</script>
