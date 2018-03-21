<template>
  <ul>
    <li :key="item" v-for="item in items">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'list',
  props: [
    'items'
  ]
}
</script>

<style lang="stylus">
/**
 * Set the font-family, font-weight, font-style
 */
font-set($font-name, $weight = 400, $style = normal)
  font-family $font-name
  font-weight $weight
  font-style $style


/**
 * media queries
 * @param {string} - breakpoints = mobile, ipad, desktop
 */

media_queries = {
  mobile  : "(min-width: 0) and (max-width: 1023px)",
  ipad    : "(min-width: 768px) and (max-width: 1023px)",
  desktop : "(min-width: 1024px)"
}
respondto(breakpoints)
  conditions = ()
  for breakpoint in breakpoints
    push(conditions, media_queries[breakpoint])
  conditions = join(", ", conditions)
  @media conditions
    {block}

  .ballball
    flex-container(space-between, stretch, row, nowrap)
    position fixed
    width 100%
    bottom rem-calc(10px)
    padding rem-calc(10px)
    z-index 100000000
    .ball
      flex-container(center, center, row, nowrap)
      width rem-calc(40px)
      height rem-calc(40px)
      background-color #4585FF
      border-radius 100%
      color #fff
      cursor pointer



  img
    width 100%

  .home-pagination
    flex-container(flex-start, stretch, row, nowrap)
    position absolute
    height rem-calc(2px)
    background-color transparent
    width 100%
    .swiper-pagination-bullet
      flex-child(1)
      width 100%
      margin rem-calc(2.5px)
      border-radius:0
      height rem-calc(1px)
      opacity .5
      background #fff
      z-index 9999999
      &-active
        opacity 1
        background #fff
        height rem-calc(3px)
      &:first-child
        margin-left 0
      &:last-child
        margin-right 0

  .block
    padding rem-calc(100px)

  .wrapper
    &__top-article
      flex-container(flex-start, stretch, row, nowrap)
      +respondto(mobile)
        flex-container(flex-start, stretch, column-reverse, nowrap)
      &--left
        flex-container(flex-start, stretch, row, nowrap)
        flex-child(1)
        margin rem-calc(20px)
        +respondto(mobile)
          flex-child-reset()
      &--right
        flex-container(flex-start, stretch, row, nowrap)
        flex-child(1)
        +respondto(mobile)
          flex-child-reset()
    &__article-list
      flex-container(center, stretch, row, wrap)
      margin rem-calc(20px)



  .latest-news
    flex-container(flex-start, stretch, row, nowrap)
    flex-child(1)
    border-bottom 1px solid #ccc
    padding-bottom rem-calc(20px)
    &__list
      flex-child(1)
    &-list
      margin-right rem-calc(10)
      &__title
        padding rem-calc(4px)
        background-color #00386d
        color #fff
      &__news
        margin rem-calc(10 0)
    &__main
      flex-child(3)

  .news
    &__time
      color #F17628

  .latest-news-main
    &--row
      margin rem-calc(10px 0 0)
      flex-container(flex-start, stretch, row, nowrap)
    &__img
      img
        width 100%
    &__title
      font-size rem-calc(26px)
      margin rem-calc(8px 0 0)
    &__content
      font-size rem-calc(13px)
      margin rem-calc(10px 0 0)
    &__date-time
      color #A7A7A7
      font-weight bold
      font-size rem-calc(12px)
    &__comment
      margin-left rem-calc(10px)
      color #006391
      font-size rem-calc(12px)
    &__note
      margin rem-calc(10px 0 0)
    &__more
      color #337ab7
      font-weight bold
      margin-top rem-calc(6px)

  .spot-news
    flex-child(1)
    +respondto(mobile)
      margin  rem-calc(20px)
      border-bottom 1px solid #ccc
    &-article
      margin-bottom rem-calc(20px)
      &--row
        flex-container(flex-start, center, row, nowrap)
      &__img
      img
        width 100%
      &__type
        color #F17628
        font-size rem-calc(11px)
      &__flag
        font-size rem-calc(11px)
        padding rem-calc(2px 4px)
        margin rem-calc(2px 4px 0)
        background-color #ff4500
        color #fff
      &__title
        font-size rem-calc(20px)
        font-weight bold
        margin rem-calc(0 0 8px)
        color #006391
      &__date-time
        color #A7A7A7
        font-weight bold
        font-size rem-calc(12px)
      &__comment
        margin-left rem-calc(10px)
        color #006391
        font-size rem-calc(12px)

  .other-info
    flex-child(1)
    +respondto(mobile)
      display none



  .article
    flex-container(center, center, column, nowrap)
    width rem-calc(300px)
    height rem-calc(400px)
    border 1px solid red
    margin rem-calc(5px 10px)
    +respondto(mobile)
      width 100%
    &__image
      overflow hidden
      img
        width 100%
</style>