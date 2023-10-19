<template>
    <div>
      <blockquote class="tiktok-embed" :cite="url" :data-video-id="videoId" :style="embedStyle">
        <section>
          <a :href="userProfile" target="_blank" :title="user">@{{ user }}</a> {{ caption }}
          <a v-for="tag in tags" :key="tag" :title="tag" target="_blank" :href="getTagLink(tag)">#{{ tag }}</a>
          <a :href="soundLink" target="_blank" :title="sound">@{{ sound }}</a>
        </section>
      </blockquote>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: String,
        required: true,
      },
      userProfile: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
        required: true,
      },
      sound: {
        type: String,
        required: true,
      },
      soundLink: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      videoId: {
        type: String,
        required: true,
      },
      embedStyle: {
        type: String,
        required: true,
      },
      scriptSrc: {
        type: String,
        required: true,
      },
    },
    methods: {
      getTagLink(tag) {
        return `https://www.tiktok.com/tag/${tag}?refer=embed`;
      },
    },
  };
  </script>