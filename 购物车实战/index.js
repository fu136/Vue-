 var app=new Vue({
	el:'#app',
	data:{
		list:[
				{
					id:1,
					name:'iphone8',
					price:5000,
					count:1
				},
				{
					id:1,
					name:'iphone9',
					price:5000,
					count:1
				},
				{
					id:1,
					name:'iphone10',
					price:5500,
					count:1
				},
				{
					id:1,
					name:'iphone8',
					price:6000,
					count:1
				}
			
		]},
		computed:{
			totalprice:function(){
				var totalprice=0;
				for(var i=0;this.list.list.length;i++){
					var item=this.list[i];
					totalprice=item.price*item.count;
					return totalprice;
					
				}
			}
		},
		methods:{
			handleReduce:function(index){
				if(this.list[index].count===1){return;}
				this.list[index].count--;
			},
			handle:function(index){
				this.list[index].count++;
			},
			handleclick:function(index){
				this.list[index].splice(index,1);
			}
		}
	
})