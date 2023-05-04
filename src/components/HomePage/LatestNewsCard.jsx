import { List, Card, Typography } from "antd";
import React from "react";

const data = [
  {
    key: 1,
    title: "Typesetting industry",
    date: "01 Jan, 2015",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEPEREPEREQEBESDxEPDw8PEBEPEhAQGBQZGhgUGBgcIS4mHB4rHxgYJjgmKy8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHDYnJSM0NDQ0NDExNDE0NDE1NDQ2NDQ/NDE1NDY3NjYxMTQ0PzQxNjE0NDE1NDQ0PzE0NTE4NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIDBQYEBwj/xABBEAACAQIEAgcEBwYEBwAAAAABAgADEQQSITEFQQYTIlFhcYEyQpGhFCNSYnKS0QczgqKxwTRTsvAVFiRUY3Ph/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJREBAQACAQQBAwUAAAAAAAAAAAECESEDEjFBBFFhcRMikaGx/9oADAMBAAIRAxEAPwD6BeLysTD6q0XlYgWvF5WTAteJWLwLSbyt4vCLXiRECZMi8XgTeTeViBa8tKSbwibyZW8mBMSLxeBMmREC14vIiGVolbybwJiReLzQmJF4vAteLyLxCJvEiIHklZETLqvEpF4FrxeReLwLReVk3gTJlbybwJk3lbyYE3kysQLSbzl+lPSKvg6lKjhqH0h3R61RcruVphgoICa6knXlaavC/tHpXyYjDVaTbNkZagHiQ2Uj5y9tcr1MZdWu8iaLBdLeH1vZxVNDtlrZqBv3XcAH0M3VN1cZlYMp2ZSGB9RGm5lL4q8mReJFWvF5WTeEWi8rJvAtEreWgIiReBMmVvJgTEiIExIiBMSImkeOIiZbJMRAREQEmIgIiIFpF5MQERF/hzhHOYH63iWNq8qVPD4NLaEkKajgHkLuvwm4xGCp4gEVKVOotvZdFcW/iG003Q058PUxJGuKxNfElm0ARnIQflVZ0AcHbUDm2i37z3+U9eE1i+P18pc7d+XO4zoPgK2q02pMfeouyDzCm628bTTv+z6pSJfB416Z5lw1LX8aEf6Z3ga/eQTbuLnu8BGVm21A7tFHgJe2Xyx+plj45cEqdIcL7JXFoP8A11h88rmE/aFXw+mNwLUyNypekb+CONfzTvix2Jv4BgoEBVbslVIO62z39ToJm9KOuPys5w5rA9PeH1gM1SpQJ5VqbWv+Jcy/OdBg+IUMQL0a1KqP/HUR/kDpNdjeinDq18+GpKxN70A1NyfEpYTQ4z9m1A3alXq0X3RXVaoX4ZSPO853pX074/M9WO5kz50eAccwn+HxfXLuqGqXYj8FUFR6GG6V8Ywf+LwOdQNX6t6fxdMyfKYuFjvj8jGvosTh8D+0vCPYVaVeiebLkrIPUEN/LOj4d0jwWKKpRxNN3b2abEpUPkj2J+Emq6TPG+K28i8iJltN5MrEC0SstAmJEQJiREDyxJiGkRJiAiJaBWWmCpUZDqAR3jSFxKne4+cLpniVR1OxB9ZaELREmAmq6T4s4fBYqqNGWg6p+NxkT+ZhNrOd6YHOuEwo16/HUswG5p0gajf6Flxm7I59TLtwterg+EFKhRojO3V0kQWHZBVQJ7wg5g/xsFA9BMSBjcDQe82a/wAT+kutO/s7Dd20E9z4lu+bOXoSx0B0t2m2AX7IlmbObC+UfZ5zGiLbUtl+AY+HfDN9q6ryQbmNcrLuc+/TMKdt1UDmWa8nPrYAEdyc5UEWvk/ic2kZwdNFXmVFix7hJq1ZqeGRDl0W2Y6ADUDzPOTkIOUanc87nvPh4Qgp/ZYHkLNcycx2UZfurq3qeUJr1efwuVtzudj3sx2B8JCoBfbSwJN9/ASqXBA0LX0G9u8nxlnFiTe5ve/JB+sjXnnXhr+IcHwmI/fYahUb7T00zj+LcTk8Z0VwmHxvDvo6Oj1MQ9VlNR3Xq6S5yQG1HbKDfnO7Sw2F23u3IfaM0NE9fxWq98y4XBpRBP8Am1nLt5dlE+MxnqY3h16Pdc5Nt5EtE8r6qstJiBESYgREmQBAWkxEDyxEtCkREBFoEmBUieathua/D9J67SbQsumpmRajDYmevEYbNqND/WeEi2h08Ial2zpimG4B+UzrilO9x854ZF5DtjaLUU7EGc3xAirxSkhNlwuCeqfx1nCgflRvjNheafo+7VMRj8T2SrYkYdGfbJQQJp4Zi869KbyeX5d7cPy6FXDWUA5Rsq7t5zMWzaW8kXb1Mwo4OhYAfZRTr6z0FDbaw5IuhPmZ67qPled87Fe19QWtqfdQd0Jc3YXAG7WBZjMbmw1sO5BrbxMutO6jO2VeQ2hLlbdSeEML8xf8WY28TsJemt9ct12GY5fWVJW1lvbZm5n7okntb2003sq+HiY3TWM3b/TMrFdAco8SrW8jeS1UbAu3rlv8JgSmDtdvIZR8TMyplNhbNbtNyQSXS43LXHtZDbTRT3KMzf8AySRyAue7cKe9jzMKQouNu/m58JUudNLndUGyjvMi5SSa3/CWQ7ctMzE2zGaLokM6YrFf9zjazoe+khFJLeFkv6z1cexhw+ExOIJVmp0HdBm9/KcoAH3rTPwHBfRsJhqHOnQRG8WyjMfjecereJHq+LJbcpHviInB9AiIgIiICIiAiIgeeIk2gRJi0m0BaTEmBESYgRMVagH8DyP6zNEK1NRCpsRYzExm4q0g4sfQ8xNXiaBTfbke+RvHLbyYnEimlSo2yIznyUE/2nk6I4fJg6BYdt0652e9s9QlyLcz2premWI6vB1RexqZaI77Me1b+ENPVwnp1w11VKgq4YrZEz08yqtgAAyX+JAnbo3W68Pzf3WT6OmRgPC3vMNR5KNAZZm+0SL8t3b9BKYKvhsSM2GxFKqBsEdHK/DUHzF5l+isL3Gm5y6lv7z0TLF8+261pjLDkPE21sO7WSGz/wC8zH/fpIZtQCpA91D2b/ebuEGpfnpte1l8gvP1mtudxnllZgLA6eA1yju8zLCoCRlW/wBkHYek866X5cyTrlHl3zLTzG5WwHNjv8Yulm7daer6w/ZH9ZXIdib88o/qxmJEB5s5+7oPiZN+Xu32XXMe6/OZn2bt+v8ArN7VudtF0sCf0EsyAbm4Pdu7St7b6G3atsi/ZHjIOtiTYnYDUhe4SbWY75vn7tH0r+sXCYQBV+k46gjKNW6pD1r38LJb1nRTnGUVeK0lAOXCYJ6rX/zK7hF9cqP8Z0c8/Uu8n0PjY6x39SIic3pIiICIiAiIgIiIGG0WlogRaTaJMCLSbRLQK2k2kyYFbRaWiBS0w4qoir29b7LzMw8Q4ilBWJZRlF2ZjZUHeT/afMekfSd8TnSk1qZADOWC1H12I3VPDTx00lkYyzmP5bnjeKwWLDYd6tPsvfKahSzrce3oDa5G84XH9GsZSJZEV0LEoEfOQnLVrE6d14fSnqShcF1ITrw4DMpXuXXS2uxvyl6NWpRdercqzsQ7irlqFzpbq9btawCWNjYbgmbk08meVyu60rtUpMM6PScHsllZGB7xe3ym74b0z4hh7BMW7qPcr2rg+F3uw9CJ7KXHatnWoi1EVjmbEUeqGWxsqWOpvYktsBKinw7EWvReiT2TVw/apBrXbUaWW4vdNN7W1lc2+wP7UKlsmJwqP2SC9Bspv35HuD+YTouH9NeG18oar1D2Csa6dTlGU3ObtJvyvznzj/ldKuuExaVeyHCPo+UmwY21tfnlmtxPBsZRvnos4HvU+38l1HqJZlYz2ze33NXpvTV0qKyXUsytnBLNlAzpcE/rMpVuYDKCRlQ5gCDYjTmPlPz3hsY9FyyPUouNC1N3puPAlSDOl4d084hQIPWpXtcAYhFcgE3IzLlbW3MmbnUvti9P3H2BnsO12RyRd7eJ5Qjk9q+UbC39BOJwP7UKT2XF4Rl1tnoOtUeeVspHoTOlwHSbheKyhMUiNsqVSaBv3APa/oZqZxi4ZW88tqr5hYAhBq3ex/WTnbXLv7zaaeAmRqdlBDKVALA+yp7jfa3ryni4jU+jUqtVwQlGm9Rra5iqljf4SzKVbj6eDovepV4hiib9Zi/o6Nvenh0CaHuzZ50c03RPCtQwGFRvbNIVanjUqHrGJ9WM3M8uV3bX1enj24yEREy6EREBESYCIkwyREQMMRENJiIgJaVloCTIlKlQICzGwEC15rMbxD3KZ8C/6TzYzHF+yvZT5t5zyTTnll6jkekWH4hiKgBp/Vq7ZBRqAqAdma9iWtzINrm3jyz0CHKAsoVRmNZGQIO9gRcC+3ZudOZtPqxMxYihTqKUqIjqd1dQw+BjbjcXzZhep7D/AFZzO7O1NVNuy/V7rpsgtcACYKJDNVqBlrPlsWZFwtgQLkOASrbi1x7xuRO2x3RjCuuVc9AC+lJrKbm+qm4PL4CaLifRmswC0qlN0QnJTqAqVHrdSe86X8tJqVzyjnb5KWhZqlRiHIT6WjBgAFzE5Q17EgZj7Ou4mTEUbtRo5UrG6gFay0LsN0yL7NjpZRe+bm2l8VhsRRKirSr0kWw/6diqWG5zDMMx3vf+mnmpYpCzNakq9Xly01NOo42ChyeybaFs2oB0JOtYsZlqB6jDMzIMr5GpdQmcdlcz3uNQCBzJA05evDcXxKUywquEptlyKExlrk3LZvZOlgL7Amy7zxbU3uzU0drBsRav1pA0sBotrnta3JAvuJSqmZKNNFXKxzCqtVcMHYk9oo3cVsGtrkNu4Eb+rxynUt9Mw1AowZ0BOWoq27Is9xmJtoCoAMxVOFcNrey1fCOWyBKiuA1TW6gMG2trqLad4mruHrBEYKtMNUFSpQtUCAE6uxvck+0QO0Ra2izHhzmNeoidXdQCyuuIC3BAUILb7ZjsL21IuHvqdEMQVFTD1aWJQgkOjZbi9tCCy9/MTT4rA4ih+9oug5sVJS34hdfnPRTxLKi11Yu+ZULs/wBGyqL9hSGF+8sDoWHrtqPSXE03AdxUurH6xE6ouSdBUBUsF+7vYjUdqBpeG8YxGFs2Hr1aI3tTdlQnxUHKfUTpsJ0tx2PC8PqNTrJinp0HqdWFqBGdc1ipC7A37Mtw7E0MZVAqYFBUDA9ZTynvszIwVgLjmTO44P0dpGvTxTIq1aTF1ZUCsSVZbMeejX8wIt1GsMe7J1KgAWGgGgHhLwFk2nJ70RJtJgREmIQiIgLSYiAiIgYYkRDSYkRAmJEQJmp4nSrHVVDgbBTa3pNtEDin4kKbZatOrS+8ULr8u18p6cPiadT93UR7bhWBI8xuPWdU9NWFmUMO5gCPnNTjOjeGq6lMrbhkNiD4d0u2bhL44a+QzWlqnAMTT/c4kuOSVxn/AJjc/AieSr9Ip/v8K5HN8OQ488pOn5o2xl0765S7XmMiExNFzZaihtslS9Jr93asD6XmV6bLuCPSVyss8sGomvxnCMNXualGmSd3UZH/ADLYzZGVIhmxzJ6JUkfPSqOu5CP2kLcsxWxK35c++a3EcBxKs9evSTFagItAE62HaYXXsgAdnXlsBO4Wnm8pmtbQS7YuL5erMhL1mrZ3VmGGrdpCov8AWVBawUa2XLvblvhYEUAxVbO7NTXCk02YrozuCCcovlAAG7ba3+oYnC06oy1KaOvc6hv6zUY3ovhapzAPTbKEBRrgKBYKFNwotfa2575ds9r5/isUHyKCCqJlC4gZ3Y6k3ca7sbDsgfEnPhsHicU6omhvlyoCKdNL7XF1sByJv53JnQcT6K4l27DUqighaauSpp0wTpZgcxNyS17/ANu46L9HFoKABdyFLuxZibDvJJt3CLVxwuV0r0W6O06NPIls1rVKiqqnPbc2HteHKdlTQKAoFgJjw+HSkuRFCqCTYaXYm5J8SSST4zKJi3b24YzGai0SJMjSYiIQiIgTERAREQEREDBERDRERAREQEm8iICIiAiIgeXE8Po1ripTR78ytj8RrNVU6NBP8NXq0PuXz0/yHT4gzoIgcfXwuNpe3Rp4hR71Emm9vLUH0UTxDHUb2fPQbmtVCo/MLgepE72YcRhadUWdFYfeUEjyPKN1i4Y31pyyEMoZSGXkyEMp9RpE9uK6JUGJei74dz7yMw+YIPzmurcK4hR9k08Sn3gFe3mtj8QZdsXpfSr2i08P/Echy16NWg3M5TUT4gBv5ZveHYPrQtQEFCLg2YXHkRG4x+llvWjh+BLkE7f71nQ0kCjKPXxMilTCiwEyRt2xxmM1CIiRtMREImJEQiYiIExIiBMSIgTERAwREQ0REiBIiRJgDIiReBMmRLCBEmRJgIiICIiAiRJgQyK2jAMPEAyVUDYWiWgIiIExEQEmREImJEQJiRJgIiIRMQIgIiIGCTEQ0iIiAiIgReREQLCTEQEREBERAm8i8RAREQJiIgJIkxASYiAiIgIERASYiEIiICIiETERA//Z",
  },
  {
    key: 2,
    title: "Typesetting industry",
    date: "01 Jan, 2016",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg",
  },
  {
    key: 3,
    title: "Typesetting industry",
    date: "01 Jan, 2015",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzuHPiczmylv4fvqfc8o8wLuwnCgU24j2xSSJei7PJN2RJeKi1hnTM82dg8g1FhsOB4&usqp=CAU",
  },
];



const LatestNewsCard = () => {
  return (
    <div
      style={{
        marginLeft: 250,
        marginRight: 250,
        marginTop: 40,
        marginBottom: 40,
      }}
    >
      <h2> LATEST NEWS </h2>
      <List
        grid={{ column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card style={{ border: 'none' , width: 400, height: 210 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={item.image}
                  alt="example"
                  style={{ width: 150, height: 180, objectFit: "cover" }}
                />
                <div style={{ marginLeft: 15 }}>
                  <Card.Meta
                    description={
                      <Typography.Paragraph style={{ fontSize: "14px" }}>
                        <h5 style={{ color: "#C1C8CE", fontSize: "13px" }}>
                          {item.date}
                        </h5>
                        <h5> {item.title} </h5>
                        <p>{item.desc}</p>
                      </Typography.Paragraph>
                    }
                  ></Card.Meta>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default LatestNewsCard;
