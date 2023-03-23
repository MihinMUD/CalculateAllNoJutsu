<h1>Calculate All No Jutsu!</h1>

<form>
    <input bind:value={prob} type="text" placeholder="Your Math Problem">
    <input type="submit" on:click={calc} value="Calculate!">
    <p>{ans}</p>
</form>
<script lang='ts'>
    import {evaluate} from 'mathjs'
    let prob:any;
    let ans:String ="";
    let calc = () => {
        try {
            ans = evaluate(prob)
        } catch {
            ans = "Invalid syntax!"
        }
        prob = ""
    }
</script>

<style></style>