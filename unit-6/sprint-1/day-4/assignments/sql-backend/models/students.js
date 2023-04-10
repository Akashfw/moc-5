

module.exports = (Sequelize , DataTypes) =>{
    const students = Sequelize.define("students", {
        name:{type: DataTypes.STRING , allowNull:false},
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
    });
    return students;
};