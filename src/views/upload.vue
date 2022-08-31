<template>
  <div class="warpper">
    <el-upload class="upload" drag action="" multiple :limit="1" accept=".json" :auto-upload="false" :on-change="fileChangeHandle">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将json文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">* 只能上传yyx导出的Json文件，且不超过10M</div>
        <div class="el-upload__tip">* yyx快照：https://bbs.nga.cn/read.php?tid=16557282</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup>
import { useYuhunStore } from "@/hooks/store/useYuhunStore.js";
import { parseYhJson } from "@/utils/parseJson.js";

const { setYuhunStore } = useYuhunStore();

const fileChangeHandle = (file) => {
  const reader = new FileReader();
  reader.readAsText(file.raw);
  reader.onload = () => {
    const yyxJson = JSON.parse(reader.result);
    let data = parseYhJson(yyxJson);
    localStorage.setItem("yyx", JSON.stringify(data));
    setYuhunStore(data);
  };
};
</script>

<style lang="scss" scoped>
.warpper {
  flex-direction: column;
  .el-upload__tip {
    text-indent: 2em;
  }
}
</style>
