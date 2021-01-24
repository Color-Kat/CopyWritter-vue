<template>
  <div id="add-article">
    <h1>Add new article</h1>

    <form>
      <label><span>Your nickname:</span><br>
        <input type="text" placeholder="ColorKat">
        <br>
      </label>

      <label><span>Title:</span><br>
        <input type="text" placeholder="There lived a grandfather and a grandmother">
        <br>
      </label>

      <label><span>Text:</span><br>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </label>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  form{
    position: relative;

    label {
        width: 100%;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;

        span {
            width: 100%;
        }

        input {
            width: 270px;
            height: 40px;
            border-radius: 5px;
            border: none;
            outline: none;
            background: rgb(218, 230, 226);
        }
    }
  }
</style>
