<script lang="ts">
    import { create, all } from "mathjs";
    let config: any = { precision: 1024, number: "BigNumber" };
    let math = create(all, config);
    let prob: any;
    let ans = "";
    let calc = () => {
        try {
            ans = math.evaluate(prob);
        } catch (e) {
            ans = "Invalid syntax!";
            console.log(e);
        }
    };
</script>

<div class="main">
    <h1>Calculate All No Jutsu!</h1>

    <form class="form">
        <input class="input" bind:value={prob} type="text" placeholder="Your Math Problem" />
        <input class="btn" type="submit" on:click={calc} value="Calculate!" />
        <p class="ans">Ans: {ans}</p>
    </form>
</div>

<style>
    .ans {
        text-align: left;
        max-height: 50vh;
        word-break: break-all;
        overflow-y: auto;
    }
    h1 {
        background: -webkit-linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
        background-clip: content-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .main {
        height: 100%;
        background-color: rgb(30, 30, 30);
        color: rgb(236, 236, 236);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5vh;
    }
    .input {
        color: rgb(30, 30, 30);
    }
    input {
        padding: 20px 10px;
        border-radius: 10px;
        border: 0;
        outline: none;
    }

    .btn {
        background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcd7000 100%);
        transition: transform 1s, background-color 1s;
        color: #fff;
        background-color: #4158d0;
    }

    .btn:hover,
    .btn:focus {
        transform: scale(105%);
        background-color: #ffcd70;
    }

    .form {
        width: 50vw;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
    }
</style>