export function GET(request,{params}){
    return Response.json({
        name:"kei",
        major:"IT",
        lv:"3",
        id: params.id
    });
}