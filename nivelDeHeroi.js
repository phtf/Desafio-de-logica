let nome = "Albert";
let cunha = "O Arsenal Humano";
let xp = 0;
let classe = null;
let levelUp = false;



console.log("Parabéns sua categoria agora é " + classe)

for (let i = 1; i < 12000; i+=1000 ){
    xp = i;
    levelUp = true;
    switch (levelUp){
        case xp <= 1000 :
            classe = "Ferro"
            break
        case (xp >= 1001 && xp <= 2000):
            classe = "Bronze"
            break
        case xp >= 2001 && xp <= 5000:
            classe = "Prata"
            break
        case xp >= 5001 && xp <= 7000:
            classe = "Ouro"
            break 
        case xp >= 7001 && xp <= 8000:
            classe = "Platina"
            break
        case xp >= 8001 && xp <= 9000:
            classe = "Ascendente"
            break
        case xp >= 9001 && xp <= 10000:
            classe = "Imortal"
            break
        case xp >= 10001: 
            classe = "Radiante"
            break
    }
    console.log("Parabéns sua categoria agora é " + classe)
    console.log("O Heroi " + nome + " " + cunha + " esta no nivel " + xp)
}