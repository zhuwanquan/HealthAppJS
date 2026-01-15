// 函数式编程示例 - 数据转换工具

// 纯函数：转换用户数据
export const transformUserData = userData => {
  return {
    ...userData,
    fullName: `${userData.firstName} ${userData.lastName}`,
    age: calculateAge(userData.birthDate),
    isAdult: calculateAge(userData.birthDate) >= 18
  };
};

// 纯函数：计算年龄
const calculateAge = birthDate => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

// 纯函数：过滤健康数据
export const filterHealthData = (data, filters) => {
  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === undefined) return true;
      return item[key] === value;
    });
  });
};

// 函数组合：转换和过滤数据
export const processHealthData = (data, filters) => {
  return filterHealthData(data, filters)
    .map(item => ({
      ...item,
      processedAt: new Date().toISOString()
    }));
};
