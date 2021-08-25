import type {TreeDirectory} from "../context/command.context";

function cd(args: string, tree: TreeDirectory){
    
    const str = args.trim().split("/");

    if(str[0].length === 0) throw new Error("Incorrect path")

    const key : string[] = tree.current.path.split("/");
    
    
    let temp : any = tree.tree;

    console.log(temp, key);

    key.forEach((x : string) => {
        if(x)
            temp = temp[x]
    })

    

    

    
    

    str.forEach((x) => {
        console.log(x, temp);
        if(temp[x] && temp[x].type === "folder")
            temp = temp[x]
        else
            temp = undefined
    })

    
    
    // tree.current = Object.defineProperty(Object(), str.reverse()[0], {
    //     value: temp,
    //     enumerable: true
    // })
    if(temp !== undefined)
        return {
            value: "",
            tree: {
                ...tree,
                current : {
                    ...temp,
                    path: tree.current.path.concat(str.join("/"), "/")
                }
            }
        }
    else
        throw new Error("Incorrect path")
}

export default cd;