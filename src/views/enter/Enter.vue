<template>
  <div class="enter flex">
    <div class="image">
      <img src="../../assets/index.webp" class="h-100 w-100" />
    </div>
    <div class="flex flex-s flex-1">
      <div class="inner p-12 flex gc-12">
        <div class="flex-1 flex flex-col">
          <div class="button-tag mb-12"> 开发者 </div>
          <div class="content flex-1">
            <ul class="users">
              <li v-for="(item, key) in collaborators" :key="key">
                <img :src="item.avatar" width="32" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="welcome flex-1 flex flex-col gr-12">
          <div class="flex-1 flex flex-col">
            <div class="button-tag mb-12">开幕式</div>
            <div class="content flex-1">
              <ul class="pl-12 introduction">
                <h3 class="mb-12">故事</h3>
                <li>
                  1.6099年11月2号12时50分03秒12微秒,人们发现了距离地球5亿光年的星球竟然存在生命活动的痕迹,命名这颗粉红色的星球为妖精大陆
                </li>
                <li>
                  2.通过虫洞隧道,能把人的意识传送过去，但行为收到很大限制
                </li>
                <li> 3.你能在里面赚钱买东西,能够在易容师那里整容 </li>
              </ul>
              <ul class="pl-12 introduction">
                <h3 class="mb-12">续程</h3>
                <li> 1.目前奠定了一个基础的世界格局</li>
                <li> 2.根据反馈继续后续的任务 </li>
                <li>
                  3.你有任何想法都能提出来,将会尽力去实现,或者自己去实现
                </li>
              </ul>
              <ul class="pl-12 introduction mb-12">
                <h3 class="mb-12">开发</h3>
                <li>
                  1.这是一个高度开放的项目,你可以往里面添加你喜欢的代码,图片,文字等内容
                </li>
                <li>
                  2. 只要参与,就能把自己的博客挂在首页,点击后就可以进入你的空间
                </li>
              </ul>
            </div>
          </div>
          <div class="enter-button elf_button" @click="enter">
            传送妖精大陆
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  type User = {
    avatar: string;
    name: string;
  };
  const collaborators = ref<User[]>([]);

  const route = useRouter();
  const enter = () => {
    route.push({
      name: 'home',
    });
  };
</script>

<style lang="scss" scoped>
  $second: #333;
  $primary: #31afe0;
  .enter {
    background-color: $second;
    height: 100vh;
    width: 100vw;
    img {
      object-fit: cover;
    }
    .inner {
      width: 90%;
      height: 80%;
      background-color: white;
      min-width: 600px;
    }
    .button-tag {
      background-color: $second;
      color: white;
      width: 100px;
      height: 32px;
      line-height: 32px;
      text-align: center;
    }
    .content {
      background-color: #eee;
      min-height: 120px;
      padding: 8px;
    }
    .enter-button {
      background-color: $primary;
      color: white;
      line-height: 42px;
      text-align: center;
    }
    .introduction {
      margin-bottom: 12px;
      li {
        color: #666;
        font-size: 14px;
      }
    }
    .welcome {
      min-width: 220px;
    }
  }
  .users {
    img {
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 1280px) {
    .enter {
      .image {
        display: none;
      }
    }
    .inner {
      background: url('../../assets/background.webp') no-repeat center;
      .content {
        background-color: rgba(238, 238, 238, 0.973);
      }
    }
  }
</style>
