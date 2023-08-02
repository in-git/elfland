/* eslint-disable no-plusplus */
import { nanoid } from 'nanoid';

export interface UploadType {
  accept?: string;
  muitiple?: boolean;
  size?: number;
  isFolder?: boolean;
}
const createInput = (config: UploadType) => {
  const input = document.createElement('input');
  input.hidden = true;
  input.type = 'file';

  if (config.isFolder) {
    input.webkitdirectory = config.isFolder;
    input.multiple = true;
  } else {
    input.multiple = config.muitiple ?? false;
    input.accept = config.accept ?? '';
  }
  input.click();
  return input;
};
export const useUploadFile = (config: UploadType) => {
  const input = createInput(config);
  return new Promise<Array<File>>((res) => {
    input.onchange = () => {
      const { files } = input;
      if (!files) return;
      if (files.length === 0) return;
      let fileList = Array.from(files);
      fileList = fileList.filter((item) => {
        if (!config.size) {
          config.size = 500 * 1024;
        }
        if (item.size > config.size * 1024) {
          return null;
        }
        return item;
      });
      res(fileList);
    };
  });
};
export const useUploadFolder = () => {
  const input = createInput({
    isFolder: true,
  });
  return new Promise((res) => {
    input.onchange = () => {
      if (input.files) res(input.files);
    };
  });
};
/* 文件转base64 */
export const toBase64 = (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise<string>((res) => {
    reader.onload = () => {
      res(reader.result as string);
    };
  });
};

/* 文件转文本 */
export const toText = (file: File) => {
  const reader = new FileReader();
  reader.readAsText(file);
  return new Promise<string>((res) => {
    reader.onload = () => {
      res(reader.result as string);
    };
  });
};

// 判断的是否是JSON字符串
export const isJson = (str: string): boolean => {
  try {
    const obj = JSON.parse(str);
    if (typeof obj === 'object' && obj) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

/* 图片地址转BASE64 */
export const imageToBase64 = (
  src: string,
  type?: string,
  quality?: number
): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.hidden = true;
  document.body.append(canvas);
  const imgObject = new Image();
  imgObject.src = src;
  imgObject.crossOrigin = 'anonymous';
  return new Promise((res) => {
    imgObject.onload = () => {
      canvas.width = imgObject.width;
      canvas.height = imgObject.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(imgObject, 0, 0);
      const base64 = canvas.toDataURL(`image/${type}`, quality);

      canvas.remove();
      res(base64);
    };
  });
};

/* 文件转二进制 */
export const toBinary = (file: File): Promise<ArrayBuffer | any> => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise((res) => {
    reader.onload = () => {
      const binaryData = reader.result;
      res(binaryData);
    };
  });
};
export function downloadBase64Image(base64String: string, fileName: string) {
  // 分割Base64字符串
  const parts = base64String.split(';base64,');
  const mimeType = parts[0].split(':')[1];
  const data = window.atob(parts[1]);

  // 创建Blob对象
  const blob = new Blob([data], { type: mimeType });

  // 创建临时链接
  const url = URL.createObjectURL(blob);

  // 创建下载链接并设置属性
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  // 触发点击事件开始下载
  document.body.appendChild(link);
  link.click();

  // 释放临时链接
  URL.revokeObjectURL(url);

  // 删除<a>元素
  document.body.removeChild(link);
}

// type:文件类型
export function base64ToBlob(urlData: string, type: string) {
  const arr = urlData.split(',');
  const array = arr[0].match(/:(.*?);/);
  const mime = (array && array.length > 1 ? array[1] : type) || type;
  // 去掉url的头，并转化为byte
  const bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  const ia = new Uint8Array(ab);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime,
  });
}
export function downloadFile(url: string, fileName: string) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';

  xhr.onload = () => {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  xhr.send();
}
export function downloadExportFile(
  blob: Blob,
  fileName: string,
  fileType = 'png'
) {
  const downloadElement = document.createElement('a');
  let href: any = blob;
  if (typeof blob === 'string') {
    downloadElement.target = '_blank';
  } else {
    href = window.URL.createObjectURL(blob); // 创建下载的链接
  }
  downloadElement.href = href;
  downloadElement.download = `${fileName}.${fileType}`; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 触发点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  if (typeof blob !== 'string') {
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  }
}

export function isTextFile(fileType: string): boolean {
  const ext = fileType.split('.').pop()?.toLowerCase(); // 获取文件扩展名并转为小写
  const textExts = [
    'txt',
    'md',
    'html',
    'css',
    'js',
    'json',
    'xml',
    'csv',
    'mdown',
    'markdown',
    'mdwn',
    'mkd',
    'mkdn',
    'mdtxt',
    'rtf',
    'log',
  ]; // 常用文本类型的扩展名数组
  return textExts.includes(ext ?? ''); // 判断文件扩展名是否为文本类型的扩展名
}
export function isImageFileType(fileType: string): boolean {
  fileType = fileType.replace('image/', '');
  const imageFileTypes = [
    'jpg',
    'jpeg',
    'jpe',
    'jif',
    'jfif',
    'jfi',
    'png',
    'gif',
    'bmp',
    'dib',
    'tiff',
    'tif',
    'ico',
    'webp',
    'svg',
    'svgz',
  ];
  return imageFileTypes.includes(fileType.toLowerCase());
}
export function isMovieFile(filename: string): boolean {
  const movieExtensions = [
    'mp4',
    'avi',
    'mkv',
    'mov',
    'wmv',
    'flv',
    'm4v',
    'webm',
    'mpeg',
  ]; // 电影文件的后缀名列表

  return movieExtensions.includes(filename);
}

export function getFileType(
  fileType: string
): 'image' | 'txt' | 'mov' | 'others' {
  if (isImageFileType(fileType)) {
    return 'image';
  }
  if (isTextFile(fileType)) {
    return 'txt';
  }
  if (isMovieFile(fileType)) {
    return 'mov';
  }
  return 'others';
}
export function fetchText(url: string) {
  return new Promise((res) => {
    fetch(url)
      .then((response) => response.text())
      .then((content) => {
        res(content);
      });
  });
}
/* 获取文件拓展名 */
export function getFileExtension(fileName: string) {
  return fileName.match(/\.([^.]+)$/)?.[1];
}
export function arrayBufferToFile(
  arrayBuffer: ArrayBuffer,
  fileName: string = nanoid().slice(0, 8)
) {
  const blob = new Blob([arrayBuffer]);
  const file = new File([blob], fileName);
  return file;
}

export function base64toFile(
  base64String: string,
  filename: string = nanoid()
): File {
  const arr = base64String.split(',');
  const fileType = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: fileType });
}

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}
export const downloadText = (text: string, filename = '', suffix = '') => {
  const element = document.createElement('a');
  let file = '';
  element.setAttribute(
    'href',
    `data:json/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  if (!filename) {
    file = `${nanoid().slice(0, 8)}.${suffix}`;
  } else {
    file = filename + suffix;
  }
  element.setAttribute('download', file);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const pngToSvg = (src: string) => {
  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const pngURL = canvas.toDataURL('image/png');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${img.width}" height="${img.height}"><image href="${pngURL}" width="${img.width}" height="${img.height}" /></svg>`;
    const svgFile = new Blob([svg], { type: 'image/svg+xml' });
    const downloadLink = document.createElement('a');
    downloadLink.download = 'converted.svg';
    downloadLink.href = URL.createObjectURL(svgFile);
    downloadLink.click();
  };

  img.crossOrigin = 'anonymous';
  img.src = src;
};

/* SVG转图片 */
export const svgToImage = (svghtml: string) => {
  const svgData = new Blob([svghtml], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgData);
  const image = new Image();

  return new Promise((resolve, reject) => {
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      context.drawImage(image, 0, 0);

      URL.revokeObjectURL(url);

      try {
        resolve(canvas.toDataURL('image/png'));
      } catch (error) {
        reject(error);
      }
    };

    image.onerror = (error) => {
      URL.revokeObjectURL(url);
      reject(error);
    };

    image.src = url;
  });
};
