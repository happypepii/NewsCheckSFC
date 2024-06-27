<template>
  <div class="container">
    <h1 style="font-weight: bold;margin-bottom: 3%;">歷史紀錄</h1>
    <div class="news-grid">
      <button class="card-btn" @click="openNewTab" v-for="i in 9" :key="i">
        <n-card title="何時淘汰「未捕獲碳排放」的燃煤發電？G7達成共識：2035年" size="small">
          sky news
          <n-tag :bordered="false" type="success" class="tag">
            60%
          </n-tag>
        </n-card>
      </button>
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
          <span style="color: black; font-size: 12px;">返回</span>
          <n-float-button @click="$router.push('/Home')">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
              <g>
                <path d="M479.9,394.9c0-19.6,4.2-97.1-56.8-158.7c-40.4-40.7-91.9-61.7-163.4-65.5c-2.1-0.1-3.8-1.9-3.8-4V84c0-3.2-3.5-5.1-6.2-3.4L33.8,222.8c-2.4,1.6-2.4,5.1,0,6.7l215.9,142.2c2.7,1.8,6.2-0.1,6.2-3.4v-81.6c0-2.3,1.9-4.1,4.2-4c44.1,1.7,69.5,10.9,97.1,23.2c36.1,16.2,72.9,50.9,94.5,83.5c13.1,19.9,19.2,33.9,21.4,39.7c0.7,1.7,2.3,2.8,4.1,2.8h2.9C480,420.2,479.9,405.2,479.9,394.9z"></path>
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

<script setup>
const openNewTab = () => {
  // 這裡可以放置打開新標籤的邏輯
}
</script>

<style scoped>
.n-float-button {
    background-color: #a8a8a8; /* 調整為你想要的顏色 */
    color: white; /* 按鈕文字顏色 */
  }
.container {
  width: 85%;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-items: center;
  align-items: center;
}

.card-btn {
  text-align: left;
  border: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
}

.n-card {
  position: relative;
}

.tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
