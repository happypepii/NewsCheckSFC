<template>
  <div class="container">
    <n-split v-model:size="split" direction="vertical" style="height: 100vh" disabled>
      <template #1>
        <div class="Pane1">
          <div class="scoreBar">
            <Score />
          </div>
          <div class="news">
            <News />
          </div>
        </div>
      </template>
      <template #2>
        <div class="Pane2">
          <div class="InputArea">
            <Input />
          </div>
          <n-button strong secondary round>Submit</n-button>
          <div class="OutputArea">
            <Output />
          </div>
        </div>
        <n-flex style="position: fixed; bottom: 80px; right: 55px;">
          <n-float-button type="primary" menu-trigger="hover">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
              <g>
                <path d="M432,176H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,168.8,440.8,176,432,176z"></path>
                <path d="M432,272H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,264.8,440.8,272,432,272z"></path>
                <path d="M432,368H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,360.8,440.8,368,432,368z"></path>
              </g>
            </svg>
            <template #menu>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <span style="color: black; font-size: 12px;">歷史<br>紀錄</span>
                <n-float-button @click="$router.push('/History')">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <g>
                      <path d="M272,64h-16c-4.4,0-8,3.6-8,8l0,72c0,4.4,7.6,8,12,8h12c4.4,0,8-3.6,8-8l0-72C280,67.6,276.4,64,272,64z"></path>
                      <g>
                        <path d="M433.9,130.1l-51.9-51.9c-9-9-21.3-14.2-34.1-14.2h-28c-8.8,0-16,7.3-16,16.2v80c0,8.8-7.2,16-16,16H160c-8.8,0-16-7.2-16-16v-80c0-8.8-7.2-16.2-16-16.2H96c-17.6,0-32,14.4-32,32v320c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V164C448,151.3,442.9,139.1,433.9,130.1z M322,400.1c0,8.8-8,16-17.8,16H143.8c-9.8,0-17.8-7.2-17.8-16v-96c0-8.8,8-16,17.8-16h160.4c9.8,0,17.8,7.2,17.8,16V400.1z"></path>
                      </g>
                    </g>
                  </svg>
                </n-float-button>
                <span style="color: black; font-size: 12px;">登出</span>
                <n-float-button @click="$router.push('/')">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <g>
                      <path d="M312,372c-7.7,0-14,6.3-14,14c0,9.9-8.1,18-18,18H94c-9.9,0-18-8.1-18-18V126c0-9.9,8.1-18,18-18h186c9.9,0,18,8.1,18,18c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14c0-25.4-20.6-46-46-46H94c-25.4,0-46,20.6-46,46v260c0,25.4,20.6,46,46,46h186c25.4,0,46-20.6,46-46C326,378.3,319.7,372,312,372z"></path>
                      <path d="M372.9,158.1c-2.6-2.6-6.1-4.1-9.9-4.1c-3.7,0-7.3,1.4-9.9,4.1c-5.5,5.5-5.5,14.3,0,19.8l65.2,64.2H162c-7.7,0-14,6.3-14,14s6.3,14,14,14h256.6L355,334.2c-5.4,5.4-5.4,14.3,0,19.8c0,0,0.1,0.1,0.1,0.1c2.7,2.5,6.2,3.9,9.8,3.9c3.8,0,7.3-1.4,9.9-4.1l82.6-82.4c4.3-4.3,6.5-9.3,6.5-14.7c0-5.3-2.3-10.3-6.5-14.5L372.9,158.1z"></path>
                    </g>
                  </svg>
                </n-float-button>
              </div>
            </template>
          </n-float-button>
        </n-flex>
      </template>
    </n-split>
  </div>
</template>

<script setup>
  import Score from "@/components/score.vue";
  import News from "@/components/news.vue";
  import Input from "@/components/input.vue";
  import Output from "@/components/output.vue";

  import { ref, watch } from "vue";
  const split = ref(0.4);
  watch(split, (newValue, oldValue) => {
      console.log("Split value changed:", newValue);
  });
</script>
  
<style scoped>
  .n-float-button {
    background-color: #a8a8a8; /* 調整為你想要的顏色 */
    color: white; /* 按鈕文字顏色 */
  }

  .Pane1 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .Pane2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .container {
    background-color: #f0f0f0;
    width: 100%;
  }
  .scoreBar {
    width: 55%;
    min-height: 250px;
    border-radius: 10px;
    background-color: #d1d1d1;
  }
  .news {
    width: 35%;
    min-height: 250px;
    border-radius: 10px;
    background-color: white; 
    padding: 1% 2%;
  }
  .InputArea {
    width: 40%;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .OutputArea {
    width: 40%;
    border-radius: 10px;
    /* background-color: #d1d1d1; */
  }
</style>
  