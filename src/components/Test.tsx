function Test() {
    const name: string = "Julia";
    const isFun: boolean = true;
    const juliasCats: string[] = ["Zed", "Frodo"];
    return (
        <div>
            <h1>Här är en testkomponent</h1>
            <p>Här är {name}s testkomponent skapad med tsx</p>
            <p>{isFun ? `${name} tycker att React är kul!` : `${name} tycker att React är svårt...`}</p>
            <p>{name} har {juliasCats.length} katter. Dom heter:</p>
            <ul>
                {
                    juliasCats.map((cat, index) => (
                        <li key={index}>{cat}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// class blir className i jsx/tsx
// for blir htmlFor
// ? : för if else

export default Test;