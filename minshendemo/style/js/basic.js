	$(document).ready(function(){
		
		/*菜单选项执行hover效果*/
		addHover("span.rightHeader ul li");
		/*防止鼠标滑过选取*/
		$(document).bind('selectstart',function(){return false;});	
		/*下拉*/
		showSlide(".searchLabel",".search");
		showSlide(".setLabel",".set");


		/*箭头hover效果*/
		arrowHover();
		/*执行时间轴消息请显示*/
		showTimeInfo();

		/*执行显示时间轴*/
		showTime();
		/*手风琴菜单*/
		zhankai();
		/*收回展开侧栏警告信息*/
		warningMsg();
		/*警告隐藏信息显示*/
		titleShow();
		/*选项卡*/
		tab(".content ul.leftTree li",".rightContent > div","active");
		/*执行个人视图选项隐藏选项*/
		showMsg();

		personViewEdit();
		showPvmModuel();

	});


	
	
	/*个人视图选项隐藏选项*/
	function showMsg(){
		$(".personViewModuel > ul > li").click(function(){
			if ($(this).next("ul").is(":hidden")){
				$(this).parent().find("ul").hide();
				$(this).next("ul").show();
			}else{
				$(this).next("ul").hide();
			}
		});
		
	}

	/*显示编辑视图*/
	function personViewEdit(){
		$(".pvmTitle span a").click(function(){
			$(".pvmPop").show();
		});
		$(".pvmPopTitle a").click(function(){
			$(".pvmPop").hide();
		});
	}



	/*折叠菜单*/	
	function zhankai(){

		$(".timeTreeMenu > div span").click(function(){
			if($(this).hasClass("arrowDown")){
				$(".arrowUp").removeClass("arrowUp").addClass("arrowDown").parent().css({"background-color":"#50949F","color":"#fff"});
				$(this).removeClass("arrowDown").addClass("arrowUp").parent().css({"background-color":"#E4E4E4","color":"#000"});;	
				$(this).parent().parent().find("ul").hide();
				$(this).parent().next("ul").show();
			}else{
				$(this).removeClass("arrowUp").addClass("arrowDown").parent().css({"background-color":"#50949F","color":"#fff"});
				$(this).parent().next("ul").hide();
			}
				
		});	
	}
	/*隐藏文字显示*/
	function titleShow(){
		$(".timeTreeMenu ul li p").mouseover(function(){
			var $title = $(this).text();
			$(this).attr("title",$title);
		});
	}

	/*告警信息折叠*/
	function warningMsg(){
		$(".timeTreeMenu ul li span a").click(function(){
			if($(this).hasClass("plus")){
				$(this).removeClass("plus").addClass("minus");
				$(this).parent().parent().find("p").hide();
			}else{
				$(this).removeClass("minus").addClass("plus");
				$(this).parent().parent().find("p").show();
			}
		});
	}

	/*-------------*/




	/*点击显示时间轴信息*/
	function showTimeInfo(){
		$(".timeTip").click(function(){
		$(".timeTree").hide();
		$(".timeTreeInfo").show();
	});
	}

	function showTime(){
		$(".back").click(function(){
			$(".timeTreeInfo").hide();
			$(".timeTree").show();
		});
			
	}
	/*--------------*/

	/*添加hover*/
	function addHover(obj){
		$(obj).mouseover(function(){
			$(this).addClass("hover");
	});	
		$(obj).mouseout(function(){
			$(this).removeClass("hover");
		});		
	}

	/*添加箭头hover*/
	function arrowHover(){
		$(".timeTip").mouseover(function(){
		$(".arrow").css({"background-image":"url("+"style/images/tiparrow_hover.png"+")"});
	});

	$(".timeTip").mouseout(function(){
		$(".arrow").css({"background-image":"url("+"style/images/tiparrow.png"+")"});
	});
	}



	
	/*左边菜单侧边栏显示*/
	function slideDownPvmModuel(){
		$(".personViewModuel").mouseover(function(){
			$(this).show(); 
		});
		$(".personViewModuel").mouseout(function(){
			$(this).hide();
		});
	}
	function hideSlidePvmModuel(){
			$(".personViewModuel").hide();
		}
	function showPvmModuel(){
		$(".personView").mouseover(function(){
			$(this).addClass("mouseOver").siblings().removeClass("active");
			$(".personViewModuel").show();
			slideDownPvmModuel();
		});
		$(".personView").mouseout(function(){
				$(this).removeClass("mouseOver");
				hideSlidePvmModuel();

		});
	}
	/*--------------------*/
		/*显示隐藏下拉*/
	function slideDown(obj){
		$(obj).mouseover(function(){
			$(this).show(); 
		});
		$(obj).mouseout(function(){
			$(this).hide();
		});
	}


	function hideSlide(obj){
		$(obj).hide();
	}

	function showSlide(obj,obj2){

		

		$(obj2).mouseover(function(){
			$(obj).show();
			slideDown(obj);
		});

		
		$(obj2).mouseout(function(){
			hideSlide(obj);
		});

		
	}
	/*--------------------------*/


 /*选项卡 */
		function tab(menubox,tabcon,choosestyle){
                $(tabcon).hide();
                $(tabcon).first().show();   //设置默认第一个内容显示
                $(menubox).eq(0).addClass(choosestyle);  //设置第一个菜单选中
                
                $(menubox).click(function(){
                        $(this).addClass(choosestyle).siblings().removeClass(choosestyle);
                        var $index=$(menubox).index(this);
                        $(tabcon).eq($index).show().siblings().hide();        
                });
        }

        function tab2(menubox,tabcon,choosestyle){
                $(tabcon).hide();
                $(tabcon).first().show();   //设置默认第一个内容显示
                $(menubox).eq(0).addClass(choosestyle);  //设置第一个菜单选中
                
                $(menubox).mouseover(function(){
                        $(this).addClass(choosestyle).siblings().removeClass(choosestyle);
                        var $index=$(menubox).index(this);
                        $(tabcon).eq($index).show().siblings().hide();        
                });
        }
/*---------------------*/