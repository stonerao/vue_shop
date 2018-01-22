<template>
<div id="file_img" >
	<input type="file" id="files" hidden="hidden" @change="file_img">
	<div id="file_imgs">
		<img src="" alt="" id="images" accept="image/*">
	</div>
	<label for="files">
		点击上传图片
	</label>
	<button class="file_btn" @click="submit" v-show="isBtn">提交</button>
	</div>
</template>
<script>
import utils from '@/assets/js/utils'
import {mapState} from 'vuex'
export default {
	props: ['active'],
	data() {
		return {
			isBtn: false,
			fileImg: "",
			src:"",
		}
	},
	methods: {
		submit() {
			this.$store.state.file.isFile = false;
		},
		file_img() {
			let images = document.getElementById("images");
			let file_imgs = document.getElementById("file_imgs");
			let imgWidth = 400;
			let lengths = 1;
			let $this = this;
			let files = event.target.files || event.dataTransfer.files;
			if (!files.length > 0) return;
			if (!/^image*/.test(files[0].type)) {
				alert('请上传图片格式，仅支持jpg、png、gif等图片格式');
				return;
			};
			var reader = new FileReader();
			reader.onload = function(readerData) {
				var img = new Image();
				img.onload = function() {
					if (img.width >= imgWidth) {
						var nums = img.width / imgWidth;
						img.width = imgWidth;
						img.height = img.height / nums;
					}
					var canvas = document.createElement('canvas');
					var cans = canvas.getContext("2d");
					canvas.width = img.width;
					canvas.height = img.height;
					cans.clearRect(0, 0, canvas.width, canvas.height);
					cans.drawImage(img, 0, 0, img.width, img.height);
					/*bese64*/
					var data = canvas.toDataURL();
					images.src = data;
					if (file_imgs.children.length == 1) {
						$this.isBtn = true;
						$this.$store.state.file.src=data;
						 
					}
					/*if(!(file_imgs.children.length>=parseInt(lengths))){
						var imgFile = document.createElement('img');
						imgFile.src = data; 
						file_imgs.appendChild(imgFile)
					}else{
						alert("最多允许上传"+lengths+"个");
					}*/

				};
				img.src = readerData.target.result;
			};
			reader.readAsDataURL(files[0]);
		}
	},
	created() {
		console.log(this.$store.state)
	}
}
</script>
<style lang="less">
	 #file_img{
	 	position:fixed;
	 	top:0;
	 	right:0;
	 	left:0;
	 	bottom:0;
	 	overflow:auto;
	 	background:rgba(0, 0, 0, 0.1);
	 	#file_imgs{
	 		width:94%;
	 		text-align:center;
			padding:0 3%;
			height:100%;
			overflow:hidden;
			img{
				width:100%;
				padding-top:0.3rem;
				max-height:70%;
			}
	 	}
	 	.btns{
	 		width:90%;
	 		background:#2973b7;
	 		height:0.8rem;
	 		line-height:0.8rem;
	 		text-align:center;
	 		color:#fff;
	 		display:inline-block;
	 		position:absolute;
	 		left:50%;
	 		transform: translateX(-50%);
	 		border-radius:0.05rem;
	 	}
	 	label{
	 		.btns;
	 		bottom:2.3rem;
			
	 	}
	 	.file_btn{
	 		.btns;
	 		bottom:1.2rem;
			border:0;
	 	}
	 }
	
</style>