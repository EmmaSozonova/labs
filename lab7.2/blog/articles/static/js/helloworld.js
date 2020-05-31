var groupmates =[{
	"name":"Cерега ",
	"surname":"Тимошенко",
	"group":["БВТ1802"],
	"marks":[4,3,5]
	},{
	"name":"Аднрюха",
	"surname":"какой то",
	"group":["БАП1802"],
	"marks":[2,5,5]
	},{
	"name":"Катюха",
	"surname":"Голькина",
	"group":["БАП1802"],
	"marks":[4,3,5]
	},{
	"name":"кирилл",
	"surname":"смирнов",
	"group":["БАП1802"],
	"marks":[3,2,5]
	},{
	"name":"Аня",
	"surname":"Бульянова",
	"group":["БУТ1802"],
	"marks":[4,3,5]
	},{
	"name":"Даниил",
	"surname":"Грубелько",
	"group":["БВТ1802"],
	"marks":[4,3,5]
	},{
	"name":"Олег",
	"surname":"Романов",
	"group":["БФИ1802"],
	"marks":[3,3,3]
	},{
	"name":"Евдокия",
	"surname":"Семеновна",
	"group":["БУТ1802"],
	"marks":[4,3,5]
	},{
	"name":"Максим",
	"surname":"Семенов",
	"group":["БВТ1802"],
	"marks":[2,2,5]
	},{
	"name":"Эмма",
	"surname":"Розова",
	"group":["БФИ1802"],
	"marks":[5,5,5]
	}];
	
var rpad=function(str,length){
	str=str.toString();
	while(atr.length<length)
		str=str+' ';
return str
}
var printStudents=function(students){
	console.log(
	rpad("Name", 15),
	rpad("Surname",15),
	rpad("Group",8),
	rpad("Marks",20))

	for(var i=0;i<=sudents.length=1;i++){
		console.log(
		rpad(students[i]['name'],15)
		rpad(students[i]['surname'],15)
		rpad(students[i]['group'],8)
		rpad(students[i]['marks'],20)		
		);
	}
	console.log('\n');
	};
};
printStudents(groupmates);