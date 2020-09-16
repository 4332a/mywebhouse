export default{
	path: '/movie',
	component: () => import('@/views/Movie'),
	children: [
		{
			path: 'city',
			component: () => import('@/components/City/index.vue')
		},
		{
			path: 'nowPlaying',
			component: () => import('@/components/NowPlaying.vue')
		},
		{
			path: 'comingSoon',
			component: () => import('@/components/ComingSoon.vue')
		},
		{
			path: 'search',
			component: () => import('@/components/Search.vue')
		},
		{
			path: 'detail/1/:movieId',
			components: {
			    default: ()=>import('@/components/NowPlaying.vue'),
				detail: ()=>import('@/views/Movie/detail')
			},
			props: {
				detail: true
			}
		},
		{
			path: 'detail/2/:movieId',
			components: {
			    default: ()=>import('@/components/ComingSoon.vue'),
				detail: ()=>import('@/views/Movie/detail')
			},
			props: {
				detail: true
			}
		},
		{
			path:'/movie',
			redirect:'/movie/nowPlaying'
		}
	]
}