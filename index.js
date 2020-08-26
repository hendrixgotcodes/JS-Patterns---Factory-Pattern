function Member() {
    this.createMember = function (name, type) {
        let member;

        if (type === "simple") {
            member = new SimpleMember(name);
        } else if (type === "standard") {
            member = new StandardMember(name);
        } else if (type === "super") {
            member = new SuperMember(name)
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} ${this.type}: ${this.cost}`);
        }

        return member;
    }

}

const SimpleMember = function (name) {
    this.name = name;
    this.cost = "Ghc 20";
}

const StandardMember = function (name) {
    this.name = name;
    this.cost = "Ghc 60";
}

const SuperMember = function (name) {
    this.name = name;
    this.cost = "Ghc 100";
}

const members = [];
const postPaid = new Member();

members.push(postPaid.createMember("Ahornam Dodzie", "simple"));
members.push(postPaid.createMember("Gameli Fosu", "standard"));
members.push(postPaid.createMember("Nana Yaw", "super"));

members.forEach((member) => {
    member.define();
})