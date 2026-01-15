// 面向对象编程示例 - 用户模型

class User {
  constructor(id, firstName, lastName, birthDate, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.email = email;
  }

  // 获取全名
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // 计算年龄
  getAge() {
    const today = new Date();
    const birth = new Date(this.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }

  // 检查是否为成年人
  isAdult() {
    return this.getAge() >= 18;
  }

  // 更新用户信息
  updateInfo(info) {
    Object.assign(this, info);
    return this;
  }

  // 序列化用户数据
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email,
      fullName: this.getFullName(),
      age: this.getAge(),
      isAdult: this.isAdult()
    };
  }
}

// 导出用户模型
export default User;
