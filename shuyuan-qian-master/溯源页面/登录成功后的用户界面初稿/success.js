$(document).ready(function(){ 
$("#btn").click(function(){
				
				var grade=$("#nianji option:selected").val();
				var class_name=$("#banji option:selected").val();
				var name=$("#user_name").val();
				var sex=$('input[name="sex"]:checked').val();
				var page_num=$("#yeshu").val();
				var page_size= 5;
				
									
						$.ajax({
							type:'POST',
							dataType:'json',
							url:'/info/queryByCon',
							contentType:'application/json;charset=UTF-8',
							async: false,
							data:JSON.stringify({
								"name": name,
								"sex": sex,
						        "grade": grade,
						        "class_name": class_name,
						        "page_num": (page_num - 1)*page_size,
						        "page_size": page_num*page_size
							}),
							
							success:function(data){//返回结果
								 
					                    var str = "";  
					                   
					                for(var i=0; i<data.length;i++){
					                   str += "<tr>" +  
					                   "<td>" + data[i].student_id + "</td>" +  
					                   "<td>" + data[i].name + "</td>" +  
					                   "<td>" + data[i].sex + "</td>" +  
					                   "<td>" + data[i].grade + "</td>" +  
					                   "<td>" + data[i].class_name + "</td>" +  
					                   "<td>" + data[i].chinese_score + "</td>" +  
					                   "<td>" + data[i].math_score + "</td>" +  
					                   "<td>" + data[i].english_score + "</td>"+
					                   "</tr>";  
					                 }
					                    document.getElementById("tbody_result").innerHTML=str;
								} 
								
						});
				
			});
  
						$("#fanye").click(function(){
							var grade=$("#nianji option:selected").val();
							var class_name=$("#banji option:selected").val();
							var name=$("#user_name").val();
							var sex=$('input[name="sex"]:checked').val();
							var page_num=$("#yeshu").val() ;
							var page_size= 5;
							
												
									$.ajax({
										type:'POST',
										dataType:'json',
										url:'/info/queryByCon',
										contentType:'application/json;charset=UTF-8',
										async: false,
										data:JSON.stringify({
											"name": name,
											"sex": sex,
									        "grade": grade,
									        "class_name": class_name,
									        "page_num": page_num+1,
									        "page_size": (page_num+1)*page_size
										}),
										
										success:function(data){//返回结果
											 
								                    var str = "";  
								                   
								                for(var i=0; i<data.length;i++){
								                   str += "<tr>" +  
								                   "<td>" + data[i].student_id + "</td>" +  
								                   "<td>" + data[i].name + "</td>" +  
								                   "<td>" + data[i].sex + "</td>" +  
								                   "<td>" + data[i].grade + "</td>" +  
								                   "<td>" + data[i].class_name + "</td>" +  
								                   "<td>" + data[i].chinese_score + "</td>" +  
								                   "<td>" + data[i].math_score + "</td>" +  
								                   "<td>" + data[i].english_score + "</td>"+
								                   "</tr>";  
								                 }
								                    document.getElementById("tbody_result").innerHTML=str;
											} 
											
									});
							   $("#yeshu").val(parseInt(page_num)+1);
		                     });
})
 
